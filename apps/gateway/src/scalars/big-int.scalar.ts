import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('BigInt', () => BigInt)
export class BigIntScalar implements CustomScalar<string, bigint> {
	description = 'BigInt custom scalar type';

	// Convert incoming JSON strings to BigInt
	parseValue(value: string): bigint {
		return BigInt(value); // value from the client
	}

	// Convert BigInt to JSON string
	serialize(value: bigint): string {
		return value.toString(); // value sent to the client
	}

	// Parse AST literal to BigInt
	parseLiteral(ast: ValueNode): bigint {
		if (ast.kind === Kind.STRING) {
			return BigInt(ast.value);
		}
		throw new Error('BigInt cannot represent non-string value: ' + ast);
	}
}
