export default function BentoBox(props) {
    return (
        <div
            className={` z-30 flex flex-col 
                        bento-card-${props.feature.bentoType} 
                        rounded-3xl bg-featureColor  row-span-3`}
        >
            <div className=" m-4">
                <h1 className=" z-30 text-textColor">{props.feature.title}</h1>
            </div>
        </div>
    );
}
