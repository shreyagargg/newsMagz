// import React, { useState } from 'react'

import Footer from "../components/Footer";
import Header from "../components/Header"
import Navbar from "../components/NavBar"

const heroArticle = {
    tag: 'UGC Equity Rules',
    title: 'Asymmetry, the elephant in the room',
    excerpt:
        'The decision to keep in abeyance the UGC rules on caste discrimination ignores the fact that actors with greater social capital, procedural familiarity, and institutional backing are better positioned to mobilise grievance processes strategically.',
    author: 'Anirban Ghatak',
    image: 'https://picsum.photos/seed/protest99/600/400',
};

const secondaryArticles = [
    {
        tag: 'UGC Equity Rules',
        title: 'First among unequals',
        excerpt:
            "The last-mile delivery of the constitutional right to equality has remained unfulfilled since Independence, especially in India's educational institutions.",
        author: 'Greeshma Kuthar',
        image: 'https://picsum.photos/seed/equality44/400/300',
    },
    {
        tag: 'UGC Equity Rules',
        title: "Editor's note",
        excerpt: null,
        author: 'Vaishna Roy',
        image: 'https://picsum.photos/seed/scream77/400/300',
    },
    {
        tag: 'UGC Equity Rules',
        title: 'UGC equity rules are a carefully curated political gesture: Anand Teltumbde',
        excerpt:
            'The academic and rights activist on the politics behind the new rules, the staged backlash from dominant castes, and why the focus on rankings and "global benchmarks" reproduces structural disadvantages for scholars from marginalised communities.',
        author: 'Amey Tirodkar',
        image: 'https://picsum.photos/seed/interview55/400/300',
    },
];

const sidebarItems = [
    { tag: 'UGC Equity Rules', highlight: false, title: 'When justice is branded as \u2018divisive\u2019' },
    { tag: 'Tribute', highlight: false, title: 'Comrade Nallakannu: A symbol of resistance, a beacon of hope' },
    { tag: 'Tribute', highlight: false, title: 'Sankar (1933\u20132026): The writer as a dear friend' },
    { tag: 'News Analysis', highlight: false, title: 'The scramble for the woman vote begins in Tamil Nadu' },
    { tag: 'Climate Change', highlight: true, title: 'Climate science must cross the Valley of Death between research and solutions' },
];

function HomeScreen() {
    return (
        <div className="">
            <div className="">
                <Header />
                <Navbar />



                <div className="editor-block">

                    {/* ── Main Column ── */}
                    <main className="eb-main">
                        <h1 className="eb-section-title">Editor's Pick</h1>

                        {/* Hero */}
                        <article className="eb-hero">
                            <img src={heroArticle.image} alt={heroArticle.title} className="eb-hero__img" />
                            <div className="eb-hero__body">
                                <p className="eb-tag">{heroArticle.tag}</p>
                                <h2 className="eb-hero__title">{heroArticle.title}</h2>
                                <p className="eb-excerpt">{heroArticle.excerpt}</p>
                                <p className="eb-author">{heroArticle.author}</p>
                            </div>
                        </article>

                        {/* Secondary row */}
                        <div className="eb-secondary-row">
                            {secondaryArticles.map((a, i) => (
                                <article key={i} className="eb-card">
                                    <img src={a.image} alt={a.title} className="eb-card__img" />
                                    <p className="eb-tag">{a.tag}</p>
                                    <h3 className="eb-card__title">{a.title}</h3>
                                    {a.excerpt && <p className="eb-excerpt">{a.excerpt}</p>}
                                    <p className="eb-author">{a.author}</p>
                                </article>
                            ))}
                        </div>
                    </main>

                    {/* ── Sidebar ── */}
                    <aside className="eb-sidebar">
                        <h2 className="eb-sidebar__title">Next in Context</h2>
                        <ul className="eb-sidebar__list">
                            {sidebarItems.map((item, i) => (
                                <li key={i} className="eb-sidebar__item">
                                    <p className={`eb-tag ${item.highlight ? 'eb-tag--red' : ''}`}>{item.tag}</p>
                                    <p className="eb-sidebar__link">{item.title}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="eb-view-all">View All</button>
                    </aside>

                </div>


            </div>
            <div className="flex justify-center items-center gap-4 px-4 py-4 bg-blue-700" >
                <img className="h-[400px] w-[400px] bg-red-300" src="https://picsum.photos/seed/interview55/400/300" alt="head news"/>
                <div className="w-[400px]">
                <h3>UGC Equity Rules</h3>
                <p>some description 3-4 lines</p>
                </div>
            </div>
            <div className=" p-4 border border-gray-800  w-max bg-yellow-200"></div>

            <Footer />
        </div>
    )
}

export default HomeScreen