import dbConnect from '../../../utils/db';
import Expense from '../../../models/Expense';

export async function POST(req) {
  await dbConnect();

  const { amount, category, date, description, userId } = await req.json();

  try {
    const expense = await Expense.create({ userId, amount, category, date, description });
    return new Response(JSON.stringify(expense), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}