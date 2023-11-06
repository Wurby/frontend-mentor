import Text from './Text';

const Link = ({ href, children }: { href: string; children: any }) => {
    return (
        <Text variant="link">
            <a href={href}>{children}</a>
        </Text>
    );
};

export default Link;
