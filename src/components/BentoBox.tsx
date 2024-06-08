export default function BentoBox(props: any) {
    return (
        <div
            className={` z-30 flex flex-col 
                        bento-card-${props.feature.bentoType} 
                        rounded-3xl bg-featureColor  row-span-3 border border-borderColor/20`}
        >
            <div className=" m-4 flex flex-col gap-4 h-full">
                <h1 className=" z-30 text-textColor text-2xl">
                    {props.feature.title}
                </h1>
                <p className="text-borderColor">{props.feature.description}</p>
                <img
                    className=" w-3/5 h-4/6 self-center"
                    src={`${props.feature.imagePath}`}
                    alt=""
                />
            </div>
        </div>
    );
}
