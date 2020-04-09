export const registerSuccess = {
  title: "Aviso importante!",
  text: "Essa aplicação é um teste, os dados serão resetados em breve...",
  icon: "warning"
};

export function registerError({ code, error, message }) {
  return code === 400
    ? {
        title: "Email em uso!",
        text: "Esse email já esta cadastrado no banco de dados.",
        icon: "error"
      }
    : {
        title: error,
        text: message,
        icon: "error"
      };
}

export function loginError({ code, error, message }) {
  return code === 401
    ? {
        title: "Email e/ou Senha invalido(s)!",
        text: "Verifique com atenção se o Email e Senha estão corretos.",
        icon: "error"
      }
    : code === 404
    ? {
        title: "O Email não consta no banco de dados...",
        text: "Talvez a aplicação tenha reiniciado.",
        icon: "warning"
      }
    : {
        title: error,
        text: message,
        icon: "error"
      };
}

export function removeIncidentError({ code, error, message }) {
  return code === 401
    ? {
        title: "Operação invalida!",
        text: "",
        icon: "error"
      }
    : {
        title: error,
        text: message,
        icon: "error"
      };
}
