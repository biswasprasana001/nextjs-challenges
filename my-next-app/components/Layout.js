// components/Layout.js

export default function Layout({ children }) { // This is the default export of the file, a React component. It accepts one prop: "children".
    return (
        <div>
            <header>
                <h1>My Layout Component</h1>
            </header>

            <main>
                {children}

            </main>

            <footer>
                <p>© 2024 My Layout Component</p>
            </footer>

            <style jsx>{`
          div {
            width: 80%; // This sets the width of the div to 80% of the parent element.
            margin: auto; // This centers the div in the middle of the page.
          }
          header, footer {
            background-color: #f0f0f0; // This sets the background color of the header and footer to a light gray.
            padding: 20px; // This adds 20 pixels of padding around the header and footer.
          }
        `}</style>
        </div>
    )
}  