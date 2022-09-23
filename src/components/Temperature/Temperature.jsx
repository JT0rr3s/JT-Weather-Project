import "./Temperature.scss";

const Temperature = (props) => {

const { tempInfo } = props;

const temps = Math.trunc(1.8 * (tempInfo.main.temp - 273) + 32)

    return (
        <div className="temp">{temps}°</div>
    )
}

export default Temperature;