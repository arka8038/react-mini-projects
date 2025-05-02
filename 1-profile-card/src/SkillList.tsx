import skills from "./utils/skills";

const SkillList = () => {
    return (
        <div className="flex justify-center items-center space-x-2 p-2 mb-4">
            {skills.map((skill) => (
                <span
                    key={skill.index}
                    className={`bg-${skill.color}-500 pl-2 pr-2 rounded font-ibm-plex-mono font-bold text-black flex`}
                >
                    {skill.name} {skill.emoji}
                </span>
            ))}
        </div>
    );
};

export default SkillList;
