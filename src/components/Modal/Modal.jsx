export default function Modal({open, onClose, children}) {
    return<>
    <div onClick={onClose} className={"flex justify-center items-center"}>
        {children}
    </div>
    </>
}