// Node modules.
import React, { Component } from "react"
// Relative imports.
import { Wrapper } from "./styles"

class SummonStatBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summon: this.props.data,
    }
  }

  render() {
    const { summon } = this.state

    return (
      <Wrapper>
        <h2
          className="name"
          onClick={this.props.clickHandler}
          onKeyDown={event => {
            // On enter, toggle expanded/expanded.
            if (event.keyCode === 13) {
              this.props.clickHandler()
            }
          }}
        >
          {summon?.name}
        </h2>
        {this.props.isOpen && (
          <section className="body">
            <section className="type">{summon?.type}</section>
            <div className="barrier" />
            <section className="vitals">
              <div className="vital-data">
                <strong>Defense: </strong>
                {summon?.defense}
              </div>
              <div className="vital-data">
                <strong>Armor: </strong>
                {summon?.armor}
              </div>
              <div className="vital-data">
                <strong>Hit Points: </strong>
                {summon?.hitPoints}
              </div>
              <div className="vital-data">
                <strong>Speeds: </strong>
                {summon?.speed}
              </div>
            </section>
            <div className="barrier" />
            <h3 className="heading">Stats</h3>
            <section className="stats">
              <section className="stat">
                <span className="label">STR</span>
                <span>{summon?.strength}</span>
              </section>
              <section className="stat">
                <span className="label">DEX</span>
                <span>{summon?.dexterity}</span>
              </section>
              <section className="stat">
                <span className="label">CON</span>
                <span>{summon?.constitution}</span>
              </section>
              <section className="stat">
                <span className="label">INT</span>
                <span>{summon?.intelligence}</span>
              </section>
              <section className="stat">
                <span className="label">WIS</span>
                <span>{summon?.wisdom}</span>
              </section>
              <section className="stat">
                <span className="label">CHA</span>
                <span>{summon?.charisma}</span>
              </section>
            </section>
            <div className="barrier" />
            <section className="saves">
              <h3 className="heading">Saves</h3>
              <span>
                <strong>Fortitude:</strong> {summon?.fortitude}
              </span>
              <span>
                <strong>Reflex:</strong> {summon?.reflex}
              </span>
              <span>
                <strong>Will:</strong> {summon?.will}
              </span>
            </section>
            <div className="barrier" />
            <section className="resistances">
              <h3 className="heading">Resistances</h3>
              <span>{summon?.resistances}</span>
            </section>
            <section className="immunities">
              <h3 className="heading">Immunities</h3>
              <span>{summon?.immunities}</span>
            </section>
            <section className="senses">
              <h3 className="heading">Senses</h3>
              <span>{summon?.senses}</span>
            </section>
            <div className="barrier" />
            <section className="abilities">
              <h3 className="heading">Abilities</h3>
              {summon?.abilities.map(ability => {
                return (
                  <section
                    className="ability"
                    key={`${summon?.name}-${ability?.name}`}
                  >
                    <div className="ability-name">{ability?.name}</div>
                    <div className="ability-description">
                      {ability?.description}
                    </div>
                  </section>
                )
              })}
            </section>
            <div className="barrier" />
            <section className="actions">
              <h3 className="heading">Actions</h3>
              {summon?.actions.map(action => {
                return (
                  <section
                    className="action"
                    key={`${summon?.name}-${action?.name}`}
                  >
                    <div className="action-name">{action?.name}</div>
                    <div className="action-description">
                      {action?.description}
                    </div>
                  </section>
                )
              })}
            </section>
          </section>
        )}
      </Wrapper>
    )
  }
}

export default SummonStatBlock
