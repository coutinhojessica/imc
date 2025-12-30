# 📊 Calculadora de IMC com Validação de Dados

Este projeto é uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida em **JavaScript**, com foco em **validação de entradas**, **tratamento de erros** e **boas práticas de lógica** no front-end.

O objetivo foi criar uma experiência simples para o usuário, evitando valores inválidos e apresentando mensagens claras de feedback.

---

## 🚀 Funcionalidades

- ✅ Validação de peso e altura
- ✅ Aceita vírgula ou ponto como separador decimal
- ✅ Limite máximo configurado para peso e altura
- ✅ Mensagens de erro dinâmicas
- ✅ Cálculo automático do IMC
- ✅ Classificação do IMC conforme padrões da OMS

---

## 📐 Regras de Validação

### Peso
- Deve ser um número válido
- Maior que `0`
- Valor máximo permitido: **650,999 kg**

### Altura
- Deve ser um número válido
- Maior que `0`
- Valor máximo permitido: **3,99 m**

---

## 🧠 Lógica do Projeto

O fluxo principal funciona assim:

1. O usuário informa peso e altura
2. Os valores são normalizados (vírgula → ponto)
3. Os dados passam por validação
4. O IMC é calculado
5. O resultado é classificado por categoria
6. O feedback é exibido na tela

---

## 📊 Classificação do IMC

| IMC              | Classificação            |
|------------------|--------------------------|
| Abaixo de 18.5   | Abaixo do peso           |
| 18.5 – 24.9      | Peso normal              |
| 25 – 29.9        | Sobrepeso                |
| 30 – 34.9        | Obesidade grau I         |
| 35 – 39.9        | Obesidade grau II        |
| Acima de 40      | Obesidade grau III       |

---

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (Vanilla JS)

---

## 📌 Aprendizados

- Validação de inputs no front-end
- Manipulação de DOM
- Organização de regras de negócio
- Uso de objetos para mapear estados
- Escrita de código mais legível e reutilizável

---

## 📂 Como usar

1. Clone este repositório
2. Abra o arquivo `index.html` no navegador
3. Informe peso e altura
4. Clique em **Calcular IMC**

---

## ✨ Autor

Desenvolvido por **Jessica Maiara**  
💻 Em constante evolução no Front-end
