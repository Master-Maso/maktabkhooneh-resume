import React, {Component} from 'react';
import Fullpage from '../components/Fullpage'
import data from '../data.json';
import './SkillSection.css'
import SkillCard from '../components/SkillCard'

class SkillSection extends Component {
    render() {

        return (
            <Fullpage className="third">
                <h3>
                    {data.sections[1].title}
                </h3>
                <div className="skills">
                {data.sections[1].items.map(eachSkill => {
                        return (
                            <SkillCard skill={eachSkill}/>
                        )
                    }
                )}
                </div>
            </Fullpage>
        );
    }
}
export default SkillSection;