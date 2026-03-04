# Propriedades Fundamentais
- Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

---
## Container (pai)
- display: grid;
- grid-template (shorthand);
    - grid-template-columns; (serve para criar colunas, com qualquer valor)
    - grid-template-rows; (serve para definir a largura das linhas) 
    - grid-template-areas;
- gap (shorthand);
    - row-gap;
    - column-gap;

---
## Itens (filhos)
- grid-column;
    - grid-column-start; (qual coluna começa)
    - grid-column-end; (qual coluna termina)
- grid-row;
    - grid-row-start;
    - grid-row-end;
- grid-area;