export default function BentoBoxB(props: any) {
    return (
        <div
            className={` z-30 flex flex-col 
                        bento-card-${props.feature.bentoType} 
                        rounded-3xl bg-featureColor col-span-2 row-span-3
                        border border-borderColor/20`}
        >
            <div className=" m-4 flex gap-4 h-full">
                <div className=" flex flex-col gap-4">
                    <h1 className=" z-30 text-textColor text-2xl">
                        {props.feature.title}
                    </h1>
                    <p className="text-borderColor">
                        {props.feature.description}
                    </p>
                </div>
                <img
                    className=" w-3/5 h-4/6 self-center"
                    src={`${props.feature.imagePath}`}
                    alt=""
                />
            </div>
        </div>
    );
}
