export default function ProjetItems({ image }: { image: string }) {
  return (
    <>
      <div className="w-auto h-auto ">
        <img
          src={image}
          className="min-w-[350px] max-w-[350px] h-auto rounded-lg border-muted-foreground/20 border-[2px] 2xl:min-w-[450px] 2xl:max-w-[450px]"
        />
      </div>
    </>
  );
}
