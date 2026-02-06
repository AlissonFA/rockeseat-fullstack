# Position

## Static
- É o padrão

## Relative
- offset (deslocamento) relativo a si mesmo
- normal flow
- stacking (empilhamento) context

## Absolute
- fica em um determinado local na tela
    - relativo ao containing block próximo ou initial
- !normal flow (exclamação significa NÃO)
- stacking context

## Fixed
- fixo na tela (mesmo rolando a tela ele fica fixo)
    - relativo ao initial containing block
- !normal flow
- stacking context

## Sticky
- relativo (se não por os props) e fixo (se por os props)
    - relativo ao elemento pai que tenha mecanismo de scroll (overflow)
- normal flow
- stacking context

## Props
- top, bottom
- left, right
- inset (aplicação de tudo ao mesmo tempo, exceto z-index)
- z-index (define o que é colocado atrás ou na frente de algo, semelhante a função do Canva)