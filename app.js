const { useState } = React;

const sampleAdventures = [
    { id: 1, title: "Investigators Needed!", summary: "Monks at Ashford Abbey have mysteriously disappeared overnight." },
    { id: 2, title: "Missing Caravan!", summary: "A merchant caravan never reached its destination, and now, eerie lights haunt the trade route." },
    { id: 3, title: "The Beast of Shadowmere", summary: "A monstrous creature has been attacking farmers near Shadowmere." },
    { id: 4, title: "Caravan Guards Needed", summary: "The Whispering Road has become treacherous with travelers vanishing." },
    { id: 5, title: "Something in the Well", summary: "Strange noises are coming from the village well." },
    { id: 6, title: "Rats in the Cellar", summary: "Big, aggressive rats have taken over the basement of the local tavern." }
];

function JobBoard() {
    const [availableAdventures, setAvailableAdventures] = useState(sampleAdventures);
    const [selectedAdventure, setSelectedAdventure] = useState(null);

    return (
        <div>
            {availableAdventures.map((adventure) => (
                <div key={adventure.id} className="job-card" onClick={() => setSelectedAdventure(adventure)}>
                    <h2>{adventure.title}</h2>
                    <p>{adventure.summary}</p>
                </div>
            ))}

            {selectedAdventure && (
                <div style={{ backgroundColor: "#444", padding: "20px", marginTop: "20px" }}>
                    <h2>{selectedAdventure.title}</h2>
                    <p>{selectedAdventure.summary}</p>
                    <button onClick={() => setSelectedAdventure(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<JobBoard />, document.getElementById("root"));
