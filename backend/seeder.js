import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todos from './data/todos.js';
import TodosCompleted from './models/todosCompletedModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await TodosCompleted.deleteMany();

    await TodosCompleted.insertMany(todos);

    console.log('data import');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await TodosCompleted.deleteMany();

    console.log('data destroyed');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '--d') {
  destroyData();
} else {
  importData();
}
