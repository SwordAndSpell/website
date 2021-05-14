// Node modules.
import React, { Component } from "react"
// Relative imports.
import { Wrapper } from "./styles"

class CompanionStatBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companion: this.props.data,
    }
  }

  render() {
    const { companion } = this.state

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
          {companion?.name}
        </h2>
        {this.props.isOpen && (
          <section className="body">
            <section className="type">{companion?.type}</section>
            <div className="barrier" />
            <section className="vitals">
              <div className="vital-data">
                <strong>Defense: </strong>
                {companion?.defense}
              </div>
              <div className="vital-data">
                <strong>Armor: </strong>
                {companion?.armor}
              </div>
              <div className="vital-data">
                <strong>Hit Points: </strong>
                {companion?.hitPoints}
              </div>
              <div className="vital-data">
                <strong>Speeds: </strong>
                {companion?.speed}
              </div>
            </section>
            <div className="barrier" />
            <h3 className="heading">Stats</h3>
            <section className="stats">
              <section className="stat">
                <span className="label">STR</span>
                <span className="center">{companion?.strength}</span>
              </section>
              <section className="stat">
                <span className="label">DEX</span>
                <span className="center">{companion?.dexterity}</span>
              </section>
              <section className="stat">
                <span className="label">CON</span>
                <span className="center">{companion?.constitution}</span>
              </section>
              <section className="stat">
                <span className="label">INT</span>
                <span className="center">{companion?.intelligence}</span>
              </section>
              <section className="stat">
                <span className="label">WIS</span>
                <span className="center">{companion?.wisdom}</span>
              </section>
              <section className="stat">
                <span className="label">CHA</span>
                <span className="center">{companion?.charisma}</span>
              </section>
            </section>
            <div className="barrier" />
            <section className="saves">
              <h3 className="heading">Saves</h3>
              <span>
                <strong>Fortitude:</strong> {companion?.fortitude}
              </span>
              <span>
                <strong>Reflex:</strong> {companion?.reflex}
              </span>
              <span>
                <strong>Will:</strong> {companion?.will}
              </span>
            </section>
            <div className="barrier" />
            <section className="skills">
              <h3 className="heading">Skills - {companion?.skillLevel}</h3>
              <div>{companion?.skills}</div>
            </section>
            <section className="senses">
              <h3 className="heading">Senses</h3>
              <div>{companion?.senses}</div>
            </section>
            <div className="barrier" />
            <section className="abilities">
              <h3 className="heading">Abilities</h3>
              {companion?.abilities.map(ability => {
                return (
                  <section
                    className="ability"
                    key={`${companion?.name}-${ability?.name}`}
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
              {companion?.actions.map(action => {
                return (
                  <section
                    className="action"
                    key={`${companion?.name}-${action?.name}`}
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

export default CompanionStatBlock
