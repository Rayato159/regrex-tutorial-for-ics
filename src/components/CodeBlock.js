import { CodeBlock, atomOneDark } from "react-code-blocks"

export const CodeBlocks = ({ props }) => {
    return (
        <CodeBlock
            text={props}
            language={"javascript"}
            showLineNumbers={false}
            theme={atomOneDark}
        />
    )
}