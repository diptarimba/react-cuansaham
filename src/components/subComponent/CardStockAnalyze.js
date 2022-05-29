function CardStockAnalyze(props){
    return (
        <div class="card stockanalyze">
        <div class="card-header">
            <h4>Stock Analyze</h4>
        </div>
        <div class="card-content pb-4">
            
            {
                props.saItems.map((item, key) => 
                <div key={key} class="recent-message d-flex px-4 py-3">
                    <div class={'avatar avatar-xl ' + item.bgcolor}>
                        <span class="avatar-content">{item.avatar}</span>
                    </div>
                    <div class="name ms-4">
                        <a class="h5 mt-2 mb-1 analyzetambah btn btn-outline-success" href={item.url}>{item.name}</a>
                    </div>
                </div>
                )
            }
        </div>
    </div>
)
}

export default CardStockAnalyze