function Form(){
    return (
    <form>
        <table align="center">
            <tr>
        <td><label>Nombre:<input type="text" name="nombre" /></label></td>
            </tr>
            <tr>
                <td><label>Apellido:<input type="text" name="apellido" /></label></td>
                </tr>
        <tr>
        <td><label>Correo:<input type="text" name="correo" /></label></td>
        </tr>
        <tr>
        <label>Telefono:<input type="text" name="telefono" /></label>
        </tr>
        <tr>
        <label>Password:<input type="password" name="pa-ss-word" /></label>
        </tr>
        <tr>
        <label>Confirmar password:<input type="password" name="pb-ss-word" /></label>
        </tr>
        <tr>
        <input type="submit" value="Enviar" />
        </tr>
        </table>
        
    </form>
        
    )
}
export default Form