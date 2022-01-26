const NavButton = (props) => {
    return (
        <>
            <button
                className={`h-[48px] w-fit px-4 bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl  ${props.btnStyle}`}
            >
                {props.btnText}
            </button>
        </>
    );
};

export default NavButton;
