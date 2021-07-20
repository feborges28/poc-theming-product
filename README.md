# Instalação

Para instalar as dependências do projeto:

```
yarn
```

Agora, instale as dependências do design system:

```
npm explore ds-wc -- yarn
```

## Build de temas

Para compilar o projeto com um novo tema:

```
npm explore ds-wc -- cross-env MARCA=nome-do-tema yarn build
```

Onde nome-do-tema pode ser substituído por: brand-01, brand-02, brand-03. Ficando: 
```
npm explore ds-wc -- cross-env MARCA=brand-01 yarn build
```

## Rodar o projeto

Após compilar o tema que deseja, rodar

```
yarn start
```
