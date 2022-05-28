function CardTopRight(props){
    return (
        <div class="card">
            <div class="card-body py-4 px-5">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Logo-idx.png" alt="Pic Profile"/>
                    </div>
                    <div class="ms-3 name">
                        <h5 class="font-bold">{props.lastprice}</h5>
                        <h6 class="text-muted mb-0">${props.stockcode}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTopRight