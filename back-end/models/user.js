module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        linkedinId: {
            type: Sequelize.STRING,
            

        },
        block: {
            type: Sequelize.STRING
        }
    });
    return model
}
