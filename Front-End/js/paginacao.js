// const data = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);

let perPage = 11;
const state = {
  page: 1,
  perPage,
  totalPage: 0,
  maxVisibleButtons: 5,
};

const html = {
  get(element) {
    return document.querySelector(element);
  },
};

const controls = {
  next() {
    state.page++;

    const lastPage = state.page > state.totalPage; //lastPage é pra falar que passou da ultima pagina
    if (lastPage) {
      state.page--;
    }
  },

  prev() {
    state.page--;

    if (state.page < 1) {
      state.page++;
    }
  },

  goTo(page) {
    if (page < 1) {
      page = 1;
    }
    state.page = +page;

    if (page > state.totalPage) {
      state.page = state.totalPage;
    }
  },

  createListeners() {
    html.get(".first").addEventListener("click", () => {
      controls.goTo(1);
      update();
    });

    html.get(".last").addEventListener("click", () => {
      controls.goTo(state.totalPage);
      update();
    });

    html.get(".next").addEventListener("click", () => {
      controls.next();
      update();
    });

    html.get(".prev").addEventListener("click", () => {
      controls.prev();
      update();
    });
  },
};

const list = {
  create(item) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.numeroNota}</td>
      <td>${item.dataEmissao}</td>
      <td>${item.dataCobranca}</td>
      <td>${item.dataPagamento}</td>
      <td>${item.valorNota}</td>
      <td>${item.docNota}</td>
      <td>${item.docBoleto}</td>
      <td class="status-${item.statusNotas
        .toLowerCase()
        .replace(" ", "-")}"><h4>${item.statusNotas}</h4></td>
      <td><i class="bi bi-list"></i></td>
    `;
    html.get(".list").appendChild(tr);
  },

  update() {
    let page = state.page - 1;
    let start = page * state.perPage;
    let end = start + state.perPage;

    obterDadosTabela().then((dados) => {
      const paginatedItems = dados.slice(start, end); // itens paginados

      // Limpa a tabela antes de adicionar as novas linhas
      html.get(".list").innerHTML = "";

      // Cria as linhas da tabela
      paginatedItems.forEach((item) => {
        list.create(item);
      });
    });
  },
};

// Atualiza a lista de itens exibidos com base na página atual
function update() {
  let page = state.page - 1;
  let start = page * state.perPage;
  let end = start + state.perPage;

  obterDadosTabela().then((dados) => {
    const paginatedItems = dados.slice(start, end); // itens paginados
    list.update(paginatedItems);
  });
}

const buttons = {
  element: html.get(".pagination .numbers"),

  create(number) {
    const button = document.createElement("div");

    button.innerHTML = number;

    if (state.page == number) {
      button.classList.add("active");
    }

    button.addEventListener("click", (event) => {
      const page = event.target.innerText;

      controls.goTo(page);
      update();
    });

    buttons.element.appendChild(button);
  },

  update() {
    html.get(".pagination .numbers").innerHTML = "";
    const { maxLeft, maxRight } = buttons.calculateMaxVisible();

    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.create(page);
    }

    // Adiciona a classe 'active' ao botão da página atual
    const currentPageButton = html.get(
      `.pagination .numbers div:nth-child(${state.page})`
    );
    if (currentPageButton) {
      currentPageButton.classList.add("active");
    }
  },

  calculateMaxVisible() {
    const { maxVisibleButtons } = state;
    let maxLeft = state.page - Math.floor(maxVisibleButtons / 2);
    let maxRight = state.page + Math.floor(maxVisibleButtons / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxVisibleButtons - 1);
      maxRight = state.totalPage;

      if (maxLeft < 1) maxLeft = 1;
    }

    return { maxLeft, maxRight };
  },
};

function update() {
  list.update();
  buttons.update();
}

function init() {
  update();
  controls.createListeners();
}

function updateTable() {
  obterDadosTabela().then((dados) => {
    state.totalPage = Math.ceil(dados.length / perPage);
    init(); // Mova a inicialização da paginação para dentro do then
  });
}
