# useSocket

forma de llamarlo en el componente de react
```
const {socket, online} = useSocket('http://localhost:8080');
```

ese hook retorna la conección al servidor del socket y su estado (online o offline)

## Recomendación

cada vez que se llama a este hook crea un nuevo cliente en el servidor, por esta razón se recomienda usarlo en una parte que se pueda proveer a toda la aplicación, un buen uso es en el context de la aplicación. 