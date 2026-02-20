# Sizing
- flex-basis (padrão)
- flex-grow (crescimento)
- flex-shrink (encolhimento)
- flex (shorthand)
- Aplica por item

## Flex
- shorthand

### initial
- 0 1 auto (não cresça, encolha e basis automático)

### auto
- 1 1 auto (cresça, encolha e basis automático)

### none
- 0 0 auto (não cresça, não encolha e não tenha basis)

### um valor
- grow | [shrink | basis]
- se numérico -> grow -> &lt;grow&gt; 1 0 (tem shrink e basis 0)
- se unit (px,rem,vh,etc...) -> basis -> 1 1 &lt;basis&gt; (tem grow e shrink)

### dois valores
- grow | [shrink | basis]
- se numérico -> shrink -> &lt;grow&gt; &lt;shrink&gt; 0
- se unit -> basis &lt;grow&gt; 1 &lt;basis&gt;

### três valores
- grow shrink basis -> a ordem importa!