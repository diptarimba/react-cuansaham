function GuideTechnicalAnalysis(){
    return (
        <section class="section">
            <div class="row">
                <div class="col-12 col-md-6 legenda">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Petunjuk</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <p class="card-text">Berikut merupakan penjelasan setiap <code>Warna Simbol</code> yang digunakan dalam setiap baris Technical Analysis
                                </p>
                                <div class="form-check">
                                <div class="custom-control custom-checkbox">
                                    <dt class="the-icon"><span class="fa-fw select-all fas" style={{color:'green'}}><i class='fas fa-angle-double-up'></i></span></dt><label class="form-check-label" for="customColorCheck1"> : Harga terkini sedang diatas nilai EMA/MA dan menjadi indikasi trend bullish</label>
                                </div>
                                </div>
                                <div class="form-check">
                                <div class="custom-control custom-checkbox">
                                    <dt class="the-icon"><span class="fa-fw select-all fas" style={{color:'red'}}><i class='fas fa-angle-double-down'></i></span></dt><label class="form-check-label" for="customColorCheck1"> : Harga terkini sedang dibawah nilai EMA/MA dan menjadi indikasi trend bearish</label>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 petunjukRekomendasi">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Petunjuk</h4>
                        </div>
                        <div class="card-content">
                            <div class="form-check form-check-warning">
                                <input class="form-check-input" type="radio" name="Warning" id="Warning" checked/>
                                <label class="form-check-label" for="Warning">
                                    Rekomendasi Wait n See akan muncul ketika indikasi bullish dan bearish seimbang yaitu 5 banding 5
                                </label>
                            </div>
                            <div class="form-check form-check-danger">
                                <input class="form-check-input" type="radio" name="Danger" id="Danger" checked/>
                                <label class="form-check-label" for="Danger">
                                    Rekomendasi Bearish akan muncul ketika indikasi Bearish lebih banyak dari Bullish yaitu lebih dari 5 indikator
                                </label>
                            </div>
                            <div class="form-check form-check-success">
                                <input class="form-check-input" type="radio" name="Success" id="Success" checked/>
                                <label class="form-check-label" for="Success">
                                    Rekomendasi Bullish akan muncul ketika indikasi Bullish lebih banyak dari Bearish yaitu  lebih dari 5 indikator
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuideTechnicalAnalysis