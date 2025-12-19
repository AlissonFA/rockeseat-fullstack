# CSS

## &lt;color&gt;
- Named (blue, red, etc...)
- Hex (#fc0)

## Background
- Color
- Image
- Repeat
- Position
- Size

### Nome de cores e hexadecimal
- Named colors (blue, red, etc...)
- RGB Hexadecimal (0 - F)
    - 0 é o preto total da cor e F é o branco total da cor
    - #f09 - RGB
    - #ff0099 - RRGGBB
    - #f09a - RGBA
    - #ff0099cc - RRGGBBAA

### Background Color, Background Image, Background Repeat
- Background Color aceita qualquer tipo de cor (ele deixa no limite das caixas)
- Background Image permite que coloque funções para definir a imagem
    - url (por padrão a imagem fica se repetindo)
- Background Repeat permite escolher se quer que a imagem fique se repetindo ou não

### Background-Position e Background-Size
- Background-Position (Shorthand)
    - O primeiro valor aplica para X e Y
    - Se tiver dois valores: o primeiro é o X e o segundo é o Y
- Background-Size é o tamanho
    - Contain (contém no espaço disponível, ele fica se adaptando)
    - Cover (cobre o espaço, se aumentar ele aumenta conforme a necessidade)

### Background Shorthand
- Background (shorthand)
    - Background-Color
    - Background-Image
    - Background-Repeat
    - Background-Position
    - Background-Size (/)