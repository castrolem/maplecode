import format from "date-fns/format";

export const FormattedDate = ({ date }: { date: string }) => {
  return (
    <small className="text-sm leading-snug text-zinc-400 hover:no-underline">
      {format(new Date(date), "PPP")}
    </small>
  );
};
