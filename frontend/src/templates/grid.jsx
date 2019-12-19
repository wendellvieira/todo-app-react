import React, { Component } from "react"

export default class Grid extends Component {

    toCssClasses( numbers ){

        const cols = numbers ? numbers.split(" ") : []
        let classes = ["xs", "sm", "md", "lg"]

        return classes
            .map( (item, index) => !!cols[index] ? `col-${item}-${cols[index]}` : null )
            .filter( item => !!item )
            .join(" ")

    }


    render() {
        const gridClasses = this.toCssClasses( this.props.cols || 12 )
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}