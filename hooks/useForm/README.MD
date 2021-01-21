# useForm

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };

    const [ value, handleInputChange, reset ] = useForm( initialForm )
```

value = valores del state, recomendable hacer lo siguiente:
```
// destructurin del initialState
const [ name, age, email ] = vale;
```
handleInputChange = función donde se captura el cambio del input, RECORDAR poner el onChange en el input (con esta fincion no se hace nada mas!!)
```
<input onChange={handleInputChange} />
```

reset = es una funcion donde resetea los values de los inputs, se utiliza dentro del onSubmit, recomendable ponerlo cunado se utiliza un input y no cambia la pagina


## ejemplo basico del uso

contenido minimo del input (name, value y onChange son obligatorios ) 

```
<input 
    type="text"
    name="email"
    value={email}
    onChange={handleInputChange} />
```
