/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

class PageHeading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            breadcrumb: props.breadcrumb,
            link: props.link,
            description: props.desc,
            listSaham: props.stocklist ?? []
        }
    }

    render(){
        console.log('Data ' + this.props.stocklist.length)
        var ListSaham = []
        if(this.state.listSaham.length !== 0){
            var RawListSaham = this.state.listSaham.data[0].kode_saham.toString().split(",");
            ListSaham = RawListSaham.map((value) => {
                return value.slice(1,-1)
            })
        }
        return (
            <div class="page-heading">
                <div class="page-title">
                    <div class="row">
                        <div class="col-12 col-md-6 order-md-1 order-last">
                            <h3>{this.state.title}</h3>
                            <p class="text-subtitle text-muted">{this.state.description}</p>
                        </div>
                        <div class="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active"><a href="/">CuanSaham</a></li>
                                    <li class="breadcrumb-item"><a href={this.state.link}>{this.state.breadcrumb}</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="container">
                    <div class="row justify-content-between">
                    <div class="col-md-3 order-last searchboxtools">
                        <label for="CariSaham" class="form-label">Cari Saham</label>
                        <input class="form-control" list="datalistOptions" id="CariSaham" placeholder="Masukan Kode"/>
                        <datalist id="datalistOptions">
                            {ListSaham.map((value, key) => <option key={key} value={value}/>)}
                        </datalist>
                    </div>
                    <div class="col-md-3 order-first align-self-end">
                        <input class="btn btn-outline-danger" id="tutorialInsight" type="button" value="Tutorial Penggunaan"/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default PageHeading