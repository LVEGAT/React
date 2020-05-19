import React from 'react';
import PropTypes from 'prop-types'


class Box extends React.Component{
    render(){
       
        return (
            <div style={{border:'1px solid #000',margin: 5, padding: 5}}>
            {this.props.children}
            </div>
        )
    }
}

export default class Article extends React.Component{
    static propTypes = {
        author : PropTypes.string.isRequired
    }

    shouldComponentUpdate(a){

        console.log("sass");
    }
 /*   constructor(props){
        super(props)
        if(typeof props.author === undefined)
        {
            console.warn('Author prop is required');
            throw new Error('author is required')
        }
    }*/
    render(){
        const {author, children, date, title} = this.props;

        return(
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por: {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

/*
Article.propTypes = {
    author : PropTypes.string

}*/

