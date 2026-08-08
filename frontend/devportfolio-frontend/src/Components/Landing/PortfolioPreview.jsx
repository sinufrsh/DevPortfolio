import preview from "../../assets/preview.png";

function PortfolioPreview() {
    return (
        <div className="w-full h-full">
            <img
                src={preview}
                alt="Portfolio Preview"
                className="w-full h-full rounded-xl"
            />
        </div>
    );
}

export default PortfolioPreview;