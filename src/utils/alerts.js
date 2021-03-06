export const registerSuccess = {
  title: "Aviso importante!",
  text:
    "Essa aplicação é um apenas um teste, os dados serão perdidos assim que o aplicativo reiniciar.",
  icon: "warning"
};

export function registerError({ code, error, message, validation }) {
  return code === 400 && validation.source === "running"
    ? {
        title: "Email em uso!",
        text:
          "O Email encontrasse vinculado a uma conta já existente no banco de dados.",
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

export function registerIncidentError({ code, error, message }) {
  return {
    title: error,
    text: message,
    icon: "error"
  };
}
