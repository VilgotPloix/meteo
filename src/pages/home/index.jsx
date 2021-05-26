import React from 'react'

export default function Home({ zip, setZip }) {
    return (
        <div>
            <form action={'/dashboard/' + zip}>
                <input type="text"
                    onChange={(e) => setZip(e.target.value)} />
                    <input type="submit" />
            </form>
        </div>
    )
}
