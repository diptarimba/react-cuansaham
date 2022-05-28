import React from "react"

class Footer extends React.Component{
    render(){
        return (
            <div class="footer clearfix mb-0 text-muted">
                <div class="float-start">
                    <p>2021 &copy; Mazer</p>
                </div>
                <div class="float-end">
                    <p>Build with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a target="_blank"
                        href="https://diptarimba.my.id" rel="noreferrer">Dipta Harimbawa</a></p>
                </div>
            </div>
        )
    }
}

export default Footer