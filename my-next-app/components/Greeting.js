// components/Greeting.js

export default function Greeting() {
    return (
        <div>
            <h2>Welcome to our website!</h2>
            <style jsx>{`
          div {
            background-color: #f0f0f0; // This sets the background color of the div to a light gray.
            padding: 20px; // This adds 20 pixels of padding around the div.
            border-radius: 10px; // This makes the corners of the div slightly rounded.
          }
          h2 {
            color: #333; // This sets the text color of the h2 element to a dark gray.
          }
        `}</style>
        </div>
    )
}  