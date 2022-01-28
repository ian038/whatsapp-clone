import { Oval } from 'react-loader-spinner'

export default function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img
                    src="https://i.pinimg.com/originals/fd/d8/97/fdd89706e35f9bc4493559caef4f1122.png"
                    alt="Loading"
                    width={300}
                    style={{ marginBottom: 15 }}
                />
                <Oval color="#13990A" height={50} width={50} />
            </div>
        </center>
    )
}
