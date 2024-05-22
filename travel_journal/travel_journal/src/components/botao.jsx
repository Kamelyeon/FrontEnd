export function Botao({clase, children, onClick, type}) {

    return (
        <>
            <button type={type} onClick={onClick} className={clase}>{children}</button>
        </>
    )
}