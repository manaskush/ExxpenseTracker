import dbConnect from '../../../utils/db';
import Expense from '../../../models/Expense';

export async function GET(req) {
  await dbConnect();

  const expenses = await Expense.aggregate([
    { $match: { userId: req.userId } },
    { $group: { _id: '$category', total: { $sum: '$amount' } } },
  ]);

  const totalSpending = expenses.reduce((sum, expense) => sum + expense.total, 0);
  const insights = expenses.map((expense) => ({
    category: expense._id,
    total: expense.total,
    percentage: ((expense.total / totalSpending) * 100).toFixed(2),
  }));

  return new Response(JSON.stringify(insights), { status: 200 });
}