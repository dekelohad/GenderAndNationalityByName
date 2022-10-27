import './Footer.css';

interface FooterProps {
    content: string;
}

const Footer = ({ content }: FooterProps) => {
    return (
        <footer className="footer">
            <span>{content}</span>
        </footer>
    );
};

export default Footer;