
import TaskBoardCard from '@/component/ui/TaskBoardCard';
const DashboardPage = () => (
  <div className="grid grid-cols-3 gap-4">
  <TaskBoardCard title="Task Completed" data={"0"} />
  <TaskBoardCard title="Task Due"  data={"4"} />
  <TaskBoardCard title="Task Progress" data={"10"} />
  </div>
);
export default DashboardPage;