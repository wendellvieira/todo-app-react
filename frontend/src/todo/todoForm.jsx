import React from "react"
import Grid from "../templates/grid"
import IconButton from "../templates/iconButton"

export default ()=> (
    <div role="form" className="todoForm row">
        <Grid cols="12 9 10">
            <input 
                id="description" 
                className="form-control"
                placeholder="Adicione uma tarefa"
            />
        </Grid>
        <Grid cols="12 3 2">
            <IconButton color="primary" icon="plus" />
        </Grid>
    </div>
)