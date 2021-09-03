import React from 'react';


class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={ this.props.onClickButton }>{ this.props.labelButton }</button>
      </div>
    )
  }
}

export default Button;

/*
Resolução:
Padrão, importar react do react para trabalhar com jsx
criar a classe do componente botão
renderizar
retornar elemento pai
criar o botão
botão recebe um evento de click e executa a props onclickbutton do arquivo app linha 28
depois onde seria o nome do botão foi feito de forma dinãmica, é só mudar no app linha 28 que ele muda aqui
*/