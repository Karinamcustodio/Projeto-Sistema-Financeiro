import { dadosTabela } from "../js/valoresLista.js";

const data = dadosTabela.map((item, index) => {
  return {
    nome: item.nome,
    numeroNota: item.numeroNota,
    dataEmissao: item.dataEmissao,
    dataCobranca: item.dataCobranca,
    dataPagamento: item.dataPagamento,
    valorNota: item.valorNota,
    docNota: item.docNota,
    docBoleto: item.docBoleto,
    statusNotas: item.statusNotas,
  };
});

let perPage = 11;
const state = {
  page: 1,
  perPage,
  totalPage: Math.ceil(dadosTabela.length / perPage),
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

    const lastPage = state.page > state.totalPage;
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
    tr.classList.add("item");
    tr.innerHTML = item;

    html.get(".list").appendChild(tr);
  },

  update() {
    html.get(".list").innerHTML = "";

    let page = state.page - 1;
    let start = page * state.perPage;
    let end = start + state.perPage;

    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach(list.create);
  },
};

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

init();