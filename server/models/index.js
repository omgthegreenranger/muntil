const User = require('./User');
const Category = require('./Category');
const Event = require('./Event');
const Sticky = require ('./Sticky');

Event.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Event, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Event, {
  foreignKey: 'user_id'
});

Category.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Category, {
  foreignKey: 'user_id'
});
  
Event.hasMany(Sticky, {
  foreignKey: 'event_id'
});

Sticky.belongsTo(Event, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});
   
  
module.exports = { User, Category, Event };

