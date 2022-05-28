function CardStockAnalyze(props){
    return (
        <div class="card stockanalyze">
        <div class="card-header">
            <h4>Stock Analyze</h4>
        </div>
        <div class="card-content pb-4">
            {
                props.items.map((item) => 
                <div class="recent-message d-flex px-4 py-3">
                    <div class="avatar bg-warning avatar-xl">
                        <span class="avatar-content">{item.avatar}</span>
                    </div>
                    <div class="name ms-4">
                        <a class="h5 mt-2 mb-1 analyzetambah btn btn-outline-secondary" href={item.url}>{item.name}</a>
                    </div>
                </div>
                )
            }
            {/* <div class="recent-message d-flex px-4 py-3">
                <div class="avatar bg-warning avatar-xl">
                    <span class="avatar-content">TA</span>
                </div>
                <div class="name ms-4">
                    <a class="h5 mt-2 mb-1 analyzetambah btn btn-outline-secondary" href="/technical/@php echo $data['CODE']; @endphp">Technical</a>
                </div>
            </div>
            <div class="recent-message d-flex px-4 py-3">
                <div class="avatar bg-danger avatar-xl">
                    <span class="avatar-content">MA</span>
                </div>
                <div class="name ms-4">
                    <a class="h5 mt-2 mb-1 analyzetambah btn btn-outline-secondary" href="/minervini/">Minervini</a>
                </div>
            </div>
            <div class="recent-message d-flex px-4 py-3">
                <div class="avatar bg-warning avatar-xl">
                    <span class="avatar-content">CP</span>
                </div>
                <div class="name ms-4">
                    <a class="h5 mt-2 mb-1 analyzetambah btn btn-outline-secondary" href="/candlestick/@php echo $data['CODE']; @endphp">Candlestick</a>
                </div>
            </div> */}
        </div>
    </div>
)
}

export default CardStockAnalyze