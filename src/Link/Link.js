import Button from 'react-bootstrap/Button';

export default function Link ({className, href, children}) {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <Button variant="secondary" className={className} href={href} onClick={onClick}>
            {children}
        </Button>
    );
};